import IssueAction from "./issueAction";
import { Skeleton, Table } from "@radix-ui/themes";

const Loading = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <>
      <IssueAction />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues?.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell>
                <Skeleton width={"3rem"} />
                <div className="block md:hidden ">
                  <Skeleton width={"3rem"} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton width={"3rem"} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton width={"3rem"} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default Loading;
