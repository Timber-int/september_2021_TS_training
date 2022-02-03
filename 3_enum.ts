enum MemberShip {
    Simple,
    Standard,
    Premium,
}

const memberShip = MemberShip.Standard;
const memberShipReverse=MemberShip[2];
console.log(memberShipReverse);
console.log(memberShip);

enum SocialMedia{
    VK="VK",
    FACEBOOK="FACEBOOK",
}

const social = SocialMedia.FACEBOOK;
console.log(social);