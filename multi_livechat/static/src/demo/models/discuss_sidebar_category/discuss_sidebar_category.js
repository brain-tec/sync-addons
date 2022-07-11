/** @odoo-module **/

import {
    registerFieldPatchModel,
    registerIdentifyingFieldsPatch,
} from "@mail/model/model_core";
import { one2one } from "@mail/model/model_field";

registerFieldPatchModel("mail.discuss_sidebar_category", "multi_livechat_demo", {
    discussAsMLChat_icq_demo: one2one("mail.discuss", {
        inverse: "categoryMLChat_icq_demo",
        readonly: true,
    }),
});

registerIdentifyingFieldsPatch(
    "mail.discuss_sidebar_category",
    "multi_livechat_demo",
    (identifyingFields) => {
        identifyingFields[0].push("discussAsMLChat_icq_demo");
    }
);
