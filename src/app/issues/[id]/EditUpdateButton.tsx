'use client'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { RxPencil2 } from "react-icons/rx";
const EditUpdateButton = ({ issueId }: { issueId: string }) => {
  const { user } = useKindeBrowserClient();
  return (
    <>
      {user && (
        <Button color="violet" className="flex gap-2">
          <RxPencil2 />
          <Link href={`/issues/${issueId}/edit`}>Update Issue</Link>
        </Button>
      )}
    </>
  );
};

export default EditUpdateButton;
