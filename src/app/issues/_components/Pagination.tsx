'use client'
import { Button, Flex, Text } from "@radix-ui/themes";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ currentPage, itemCount, pageSize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <Flex align={"center"} gap={"2"}>
      <Text size={"2"}>
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
        color="gray"
        variant="soft"
      >
        <RxDoubleArrowLeft />
      </Button>
      <Button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        color="gray"
        variant="soft"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === pageCount}
        color="gray"
        variant="soft"
      >
        <ChevronRightIcon />
      </Button>
      <Button
        onClick={() => changePage(pageCount)}
        disabled={currentPage === pageCount}
        color="gray"
        variant="soft"
      >
        <RxDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
