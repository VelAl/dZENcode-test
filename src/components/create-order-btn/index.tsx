"use client";

import { createRandomOrder_A } from "@/actions";
import { useTransition } from "react";
import { toast } from "sonner";

export const CreateOrderBtn = () => {
  const [isPending, startTransition] = useTransition();

  const _handleCreate = () =>
    startTransition(async () => {
      const res = await createRandomOrder_A();

      if (!res.isSuccess) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        onClick={_handleCreate}
        disabled={isPending}
        style={{width: '145px'}}
      >
        {isPending ? (
          <div className="spinner-border spinner-border-sm text-light" />
        ) : (
          "+ Create Order"
        )}
      </button>
    </div>
  );
};
