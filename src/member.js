import {createElement, clearHTML} from './functions';
import {createNav, createFooter} from './home'

function createHeading(){
    const membershipHeadingCont = createElement('DIV', 'now-playing-heading');

    const h1 = createElement('H1', 'membership');
    h1.textContent = 'MEMBERSHIP';

    const hr = createElement('HR', 'hr');

    membershipHeadingCont.append(h1, hr)

    return membershipHeadingCont
}

function createMebershipCopy(){

    const copyCont = createElement('DIV', 'membership-copy-cont');

    const membershipSubhead = createElement('h2', 'membership-subhead')
    membershipSubhead.textContent = 'INTERESTED IN A MEMBERSHIP?'

    const p1 = createElement('P', 'membership-copy-1')
    p1.textContent = `
    For the past two decades the Music Box has been the premiere venue for independent, foreign, cult and classic films.  Built in 1929 the Music Box Theatre has the largest theatre space operated fulltime in Chicago.

    Members of the Music Box Theatre will receive advanced notice of special screenings, discounted prices on tickets and concessions as well as invites to member only events.

    Joining the Music Box is a great way to support the historic theatre and receive benefits.

    YOUR MEMBERSHIP SUPPORTS
    The independently owned and operated community movie theatre and lounge. All of the quality programming Music Box offers; including holiday classics, midnight movies, MBT talks, Cinema Science, film festivals, feature presentations and visits from directors, producers, and actors. Preserving the beauty and elegance of the historic theatre.
    `

    const p2 = createElement('P', 'membership-copy-2')
    p2.textContent = `
    MEMBERSHIP BENEFITS
    1 complimentary ticket for 1 regular priced screening (theatrical screenings only)
    Discounted ticket prices for all virtual and regular theatrical screenings plus select Special Events (prices vary)
    Invitations to Free Monthly Member Screenings
    Advanced notice and purchase for select special screenings. 
    Restaurant discounts at our partner restaurants†
    Discount on Music Box Film DVD’s when purchased at the theatre
    Free refills on any size popcorn and soda
    Discounted glasses of Music Box brand wine and beers
    Discounted Music Box brand wine by the bottle

    $60 INDIVIDUAL MEMBERSHIP
    Membership lasts one year from date of purchase. Benefits are only valid for the individual member.

    $100 DUAL MEMBERSHIP
    Dual Memberships receive the same benefits as individuals – for two. Members can share the account with one person or bring a different guest to the theatre each time! Membership lasts one year from date of purchase.
    `

    copyCont.append(membershipSubhead, p1, p2)

    return copyCont
}

function loadMembership(){
    const content = document.getElementById('content')
    clearHTML(content)

    const membership = createElement('DIV', 'membership');
    const main = document.createElement('MAIN', 'main')
    main.append(createMebershipCopy());
    membership.append(main);

    content.append(membership)
}

export default loadMembership