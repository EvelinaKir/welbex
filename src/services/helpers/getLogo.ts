import telegramLogo from '@/public/images/social/telegram.png'
import viberLogo from '@/public/images/social/viber.png'
import whatsappLogo from '@/public/images/social/whatsapp.png'
import {ELogo} from "@/services/enums/logo";

const getLogo = (value: ELogo) => {
    switch (value) {
        case  ELogo.telegram:
            return telegramLogo.src
            break
        case  ELogo.whatsapp:
            return whatsappLogo.src
            break
        case  ELogo.viber:
            return viberLogo.src
            break
        default:
            return ''
            break
    }
}

export default getLogo
