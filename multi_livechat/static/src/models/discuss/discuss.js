/** @odoo-module **/

import { registerInstancePatchModel } from "@mail/model/model_core";

registerInstancePatchModel(
    "mail.discuss",
    "multi_livechat/static/src/models/discuss/discuss.js",
    {
        /**
         * @override
         */
        onInputQuickSearch(value) {
            if (!this.sidebarQuickSearchValue) {
                // TODO
                // this.categoryLivechat.open();
            }
            return this._super(value);
        },
        getMLChatCategories() {
            // CategoryMLChat_NAME -> field
            // TODO
            return {};
        },
    }
);
