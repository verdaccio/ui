
import Austria from './icons/Austria'
import Brazil from './icons/Brazil'
import China from './icons/China'
import Earth from './icons/Earth'
import FileBinary from './icons/FileBinary'
import India from './icons/India'
import Law from './icons/Law'
import License from './icons/License'
import Nigaragua from './icons/Nigaragua'
import Pakistan from './icons/Pakistan'
import Spain from './icons/Spain'
import Time from './icons/Time'
import Verdaccio from './icons/Verdaccio'
import Version from './icons/Version'

import { Icons } from './Icon'


function getIcon(icon: Icons) {
    switch (icon) {
        case 'austria':
            return Austria
        case 'brazil':
            return Brazil
        case 'china':
            return China
        case 'earth':
            return Earth
        case 'filebinary':
            return FileBinary
        case 'india':
            return India
        case 'law':
            return Law
        case 'license':
            return License
        case 'nicaragua':
            return Nigaragua
        case 'pakistan':
            return Pakistan
        case 'spain':
            return Spain
        case 'time':
            return Time
        case 'verdaccio':
            return Verdaccio
        case 'version':
            return Version
    }
}

export default getIcon
