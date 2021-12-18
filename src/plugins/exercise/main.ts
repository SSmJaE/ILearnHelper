import { store } from "@src/store";
import { sleep } from "@src/utils/common";
import { addMessage } from "@src/store/actions";

export async function displayAnswers() {
    for (const answerElement of document.querySelectorAll(".true_analysis")) {
        const answerBase64 = answerElement.getAttribute("data-answer") as string;
        const answerText = decodeURIComponent(escape(atob(answerBase64)));
        const answerTexts = answerText.split("|$|");

        await addMessage(answerTexts);
        if (answerTexts.length > 1) {
            await addMessage("", "hr");
        }
    }
}
