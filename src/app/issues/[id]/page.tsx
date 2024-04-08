import React from "react";
import prisma from "../../../../prisma/client";
import { notFound } from "next/navigation";
import EditUpdateButton from "./EditUpdateButton";
import IssueDetails from "./issueDetails";
import DeleteIssueButon from "./DeleteIssueButon";
import AssigneeSelect from "./AssigneeSelect";

type Props = {
  params: { id: string };
};

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });
  if (!issue) notFound();

  return (
    <div className="sm:flex space-y-4 justify-evenly flex-none">
      <IssueDetails issue={issue} />
      <div className="space-y-2">
        <AssigneeSelect issue={issue} />
        <EditUpdateButton issueId={issue.id} />
        <DeleteIssueButon issueId={issue.id} />
      </div>
    </div>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });
  if (!issue) notFound();
  return {
    title: `Issue ${issue.title}`,
    description: issue.description,
  };
}

export default IssueDetailPage;
