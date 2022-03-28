import {createElement, clearHTML} from './functions';

function createHeading(){
    const membershipHeadingCont = createElement('DIV', 'membership-heading-cont');

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

    const p1 = createElement('P', 'membership-copy-1');
    const p2 = createElement('P', 'membership-copy-2');
    const p3 = createElement('P', 'membership-copy-3');
    const p4Heading = createElement('h5', 'membership-heading');
    const p4 = createElement('P', 'membership-copy-4');
    const benefitsHeading = createElement('h5', 'membership-heading');
    const benefitsUL = createElement('UL', 'benefits-list')
    const benefits1 = createElement('LI', 'membership-benefits-1');
    const benefits2 = createElement('LI', 'membership-benefits-2');
    const benefits3 = createElement('LI', 'membership-benefits-3');
    const benefits4 = createElement('LI', 'membership-benefits-4');
    const benefits5 = createElement('LI', 'membership-benefits-5');
    const benefits6 = createElement('LI', 'membership-benefits-6');
    const benefits7 = createElement('LI', 'membership-benefits-7');
    const benefits8 = createElement('LI', 'membership-benefits-8');
    const benefits9 = createElement('LI', 'membership-benefits-9');
    benefitsUL.append(benefits1, benefits2, benefits3, benefits4, benefits5, benefits6, benefits7, benefits8, benefits9)
    const p5Heading = createElement('h5', 'membership-heading');
    const p5 = createElement('P', 'membership-copy-5');
    const p6Heading = createElement('h5', 'membership-heading');
    const p6 = createElement('P', 'membership-copy-6');


    p1.textContent = `
    For the past two decades the Music Box has been the premiere venue for independent, foreign, cult and classic films.  Built in 1929 the Music Box Theatre has the largest theatre space operated fulltime in Chicago.
    `
    p2.textContent = `Members of the Music Box Theatre will receive advanced notice of special screenings, discounted prices on tickets and concessions as well as invites to member only events.`
    p3.textContent = `Joining the Music Box is a great way to support the historic theatre and receive benefits.`
    p4Heading.textContent = 'YOUR MEMBERSHIP SUPPORTS';
    p4.textContent = `The independently owned and operated community movie theatre and lounge. All of the quality programming Music Box offers; including holiday classics, midnight movies, MBT talks, Cinema Science, film festivals, feature presentations and visits from directors, producers, and actors. Preserving the beauty and elegance of the historic theatre.`
    benefitsHeading.textContent = `MEMBERSHIP BENEFITS`;
    benefits1.textContent = `1 complimentary ticket for 1 regular priced screening (theatrical screenings only)`
    benefits2.textContent = `Discounted ticket prices for all virtual and regular theatrical screenings plus select Special Events (prices vary)`
    benefits3.textContent = `Invitations to Free Monthly Member Screenings`
    benefits4.textContent = `Advanced notice and purchase for select special screenings.`
    benefits5.textContent = `Restaurant discounts at our partner restaurants†`
    benefits6.textContent = `Discount on Music Box Film DVD’s when purchased at the theatre`
    benefits7.textContent = `Free refills on any size popcorn and soda`
    benefits8.textContent = `Discounted glasses of Music Box brand wine and beers`    
    benefits9.textContent = `Discounted Music Box brand wine by the bottle`
    p5Heading.textContent = '$60 INDIVIDUAL MEMBERSHIP';
    p5.textContent = 'Membership lasts one year from date of purchase. Benefits are only valid for the individual member.'
    p6Heading.textContent = '$100 DUAL MEMBERSHIP';
    p6.textContent = 'Dual Memberships receive the same benefits as individuals – for two. Members can share the account with one person or bring a different guest to the theatre each time! Membership lasts one year from date of purchase.'



    const col1 = createElement('DIV', 'copy-column-1')
    const col2 = createElement('DIV', 'copy-column-2')

    col1.append(membershipSubhead, p1, p2, p3, p4Heading, p4)
    col2.append(benefitsHeading, benefitsUL, p5Heading, p5, p6Heading, p6)

    copyCont.append(col1, col2)

    return copyCont
}

function loadMembership(){
    const content = document.getElementById('content')
    clearHTML(content)

    const membership = createElement('DIV', 'membership');
    const main = document.createElement('MAIN', 'main')
    main.append(createHeading(), createMebershipCopy());
    membership.append(main);

    content.append(membership)
}

export default loadMembership