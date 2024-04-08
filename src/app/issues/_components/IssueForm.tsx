"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import Spinner from "@/components/spinner";
import { Issue } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Button } from "@radix-ui/themes";

type IssueFormData = z.infer<typeof IssueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(IssueSchema),
  });

  const [error, setError] = useState<string | null>(null);
  const [submitting, setIsSubmitting] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);

      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data);
      } else {
        await axios.post("/api/issues", data);
        router.push("/issues");
        router.refresh();
      }
    } catch (error) {
      setIsSubmitting(false);
      setError("Something went wrong");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={onSubmit} className=" mt-1 space-y-2">
        <Input
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        />
        {errors.title && (
          <Alert variant="destructive">{errors.title.message}</Alert>
        )}
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE autoSave="true"  placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Alert variant="destructive">{errors.description.message}</Alert>
        )}
        <Button color="violet" disabled={submitting} className="relative">
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {submitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
