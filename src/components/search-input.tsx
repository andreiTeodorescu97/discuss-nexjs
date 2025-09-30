"use client";

import { Form, Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

const SearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <Form action={actions.search}>
      <Input name="term" defaultValue={searchParams.get("term") || ""} />
    </Form>
  );
};

export default SearchInput;
