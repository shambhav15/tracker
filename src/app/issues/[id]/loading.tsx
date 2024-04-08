import { Card, Skeleton } from "@radix-ui/themes";

const loading = () => {
  const issue = [1, 2, 3, 4];
  return (
    <div className="max-w-xl">
      <h1 className="text-lg font-semibold">
        <Skeleton width={"3rem"} />
      </h1>
      <div className="flex gap-2 my-1">
        <Skeleton width={"3rem"} />
        <Skeleton width={"3rem"} />
      </div>
      <Card className="p-3 prose mt-4">
        <Skeleton />
      </Card>
    </div>
  );
};

export default loading;
