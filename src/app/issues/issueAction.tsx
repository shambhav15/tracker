"use client";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import { Button, Flex } from "@radix-ui/themes";

const IssueAction = () => {
  return (
    <Flex  justify={"between"}>
      <IssueStatusFilter />
      <Button color="violet">
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
