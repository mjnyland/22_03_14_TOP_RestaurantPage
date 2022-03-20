/*
import loadHome from home
import loadMenu from menu
import loadMember from member
*/

import loadHome from './home'

function initializeSite() {
    const content = document.getElementById('content')

    content.append(loadHome())
    
}

export default initializeSite