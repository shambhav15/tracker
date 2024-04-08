import Skeleton from "react-loading-skeleton";

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl">
      <form className=" mt-1 space-y-2">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </form>
    </div>
  );
};

export default IssueFormSkeleton;
