"use client";

import { Issue, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Select } from "@radix-ui/themes";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { user } = useKindeBrowserClient();
  const { toast } = useToast();
  const { data: users, isLoading, error } = useUsers();
  const handleValue = (userId: string) => {
    axios
      .patch(`/api/issues/${issue.id}`, {
        assigneeId: userId || null,
      })
      .catch((e) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  };

  if (error) return null;
  if (isLoading) return <Skeleton className="max-w-36" height={"2rem"} />;

  return (
    <>
      {user && (
        <Select.Root
          onValueChange={(userId) => handleValue(userId)}
          defaultValue={issue.assigneeId || ""}
        >
          <Select.Trigger className="w-[180px]" placeholder="Assign..." />
          <Select.Content>
            <Select.Group>
              <Select.Item>Unassigned</Select.Item>
              {users?.map((u) => (
                <Select.Item key={u.kindeId} value={u.kindeId}>
                  {u.name}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      )}
    </>
  );
};

const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: 60 * 1000 * 10,
    retry: 2,
  });

export default AssigneeSelect;
