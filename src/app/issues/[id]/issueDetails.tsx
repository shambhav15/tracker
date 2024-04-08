import { IssueStatusBadge } from "@/components";
import { Issue } from "@prisma/client";
import { Card } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">{issue.title}</h1>
      <div className="flex gap-2 my-1">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="p-3 prose max-w-lg mt-4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
