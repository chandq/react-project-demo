import {message, notification} from "antd";
import {browserHistory} from "react-router";
import {unLogin} from "../../login/actions/index";
import {decrypter} from "utils/crypto";
import {loginPost} from "pages/login/actions";
export const IS_SHOW_CONSOLE = 'IS_SHOW_CONSOLE'

export function visitConsole(bool) {
    return {
        type: IS_SHOW_CONSOLE,
        consoleIsShow: bool
    }
}