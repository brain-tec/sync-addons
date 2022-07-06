/** @odoo-module **/

import { registerInstancePatchModel } from "@mail/model/model_core";
import { insertAndReplace } from "@mail/model/model_field_command";

registerInstancePatchModel(
    "mail.messaging_initializer",
    "im_livechat/static/src/models/messaging_initializer/messaging_initializer.js",
    {
        _initResUsersSettings(settings) {
            const data = {};
            _.each(this.messaging.discuss.getMLChatCategories(), (chat, field_name) => {
                const NAME = field_name.split("_")[1];
                const display_name = NAME.charAt(0).toUpperCase() + NAME.slice(1);
                const state_key = "is_discuss_sidebar_category_" + NAME + "_open";
                data[field_name] = insertAndReplace({
                    isServerOpen: settings[state_key],
                    name: display_name,
                    serverStateKey: state_key,
                    sortComputeMethod: "last_action",
                    supportedChannelTypes: [NAME],
                });
            });

            this.messaging.discuss.update(data);
            this._super(...arguments);
        },
    }
);
