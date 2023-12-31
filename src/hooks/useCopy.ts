import { CopiedValue, CopyFn } from "@/types/hookTypes";
import { useState } from "react";
import {toast} from "react-hot-toast";

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copiedValue = ()  => toast.success("Copied");
  const copiedFailed = () => toast.error("Copy failed");
  const copiedNotSupported = () => toast.error("Clipboard not supprted");

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      copiedNotSupported();
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      copiedValue();
      setCopiedText(text);
      return true;
    } catch (error) {
      copiedFailed();
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;