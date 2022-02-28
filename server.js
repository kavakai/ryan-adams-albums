const { response } = require('express');
const express = require('express');
const app = express();

app.set('port', process.env.port || 7000);

app.locals.title = 'Ryan Adams Albums';

app.get('/', (request, response) => {
  response.send('Welcome to Heartbreaker')
})

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});

app.locals.albums = {
  albums: [
    {
      id: 1,
      releaseDate: "09/05/2000",
      title: "Heartbreaker",
      description: "Heartbreaker is the debut studio album by Ryan Adams, released on September 5, 2000. The album was recorded over fourteen days at Woodland Studios in Nashville, Tennessee. It was nominated for the 2001 Shortlist Music Prize. The album is said to be inspired by Adams' break-up with music industry publicist Amy Lombardi. According to Adams, the album's title originates from a poster of Mariah Carey: \"My manager called and said, 'You have 15 seconds to name this record, ' My eyes focused on this poster of Mariah wearing a T-shirt that said HEARTBREAKER. I just shouted, 'Heartbreaker!’\"'",
      tracks: []},
    {
      id: 2,
      releaseDate: "09/25/2001",
      title: "Gold",
      description: "Gold is the second studio album by Ryan Adams, released September 25, 2001. The album remains Adams' best-selling album, certifying Gold in the UK and going on to sell 364,000 copies in the US and 812,000 worldwide. Adams noted that \"with Gold, I was trying to prove something to myself. I wanted to invent a modern classic.\" The album includes \"When the Stars Go Blue\", which has been covered by artists such as The Corrs, Bono, Tyler Hilton, Bethany Joy Galeotti, and Tim McGraw.",
      track: []
    },
    {
      id: 3,
      releaseDate: "09/24/2002",
      title: "Demolition",
      description: "Demolition is the third studio album by songwriter Ryan Adams, released on September 24, 2002. The album comprises tracks from Adams' unreleased studio albums, The Suicide Handbook, The Pinkheart Sessions and 48 Hours, as well as \"You Will Always Be The Same\" from The Stockholm Sessions. PopMatters called Demolition “a fine addition to Adams' discography in that it gives an overview of the differing musical styles Adams has been exploring while his critical stock has been hitting overdrive.”",
      tracks: []
    },
    {
      id: 4,
      releaseDate: "11/04,2003",
      title: "Rock N Roll",
      description: "Rock N Roll is the fourth studio album by Ryan Adams, released on November 4th, 2003. The album features the hit single \"So Alive\", and includes guest appearances by Adams's then girlfriend, actress Parker Posey, former Hole and Smashing Pumpkins bass player Melissa Auf der Maur, and Green Day's Billie Joe Armstrong. Adams describes the album as \"the most rock thing I have ever done,\" and notes that in spite of the album's mixed reception, recording it was \"fun as fuck.\" The album was recorded in two weeks at Stratosphere Sound, guitarist James Iha's studio in Chelsea, Manhattan, New York.",
      tracks: []
    },
    { id: 5,
      releaseDate: "05/04/2004",
      title: "Love Is Hell",
      description: "Love Is Hell is the fifth studio album by alternative country artist Ryan Adams, released on May 4, 2004. The album was originally released as two EPs, Love Is Hell pt. 1 and Love Is Hell pt. 2. A full-length version of the album was released when the EPs proved to be more of a commercial success than anticipated. The Oasis cover, \"Wonderwall\", was released as a single in the UK on June 28, 2004. A shorter version of \"Anybody Wanna Take Me Home\" originally appeared on Rock N Roll, however, a longer version of the song appears on Love Is Hell. Love Is Hell was released in Japan on June 27, 2007 with a bonus disc of tracks recorded during the same sessions as the album.",
      tracks: []},
    { id: 6,
      releaseDate: "05/03/2005",
      title: "Cold Roses",
      description: "Cold Roses is the sixth studio album by Ryan Adams, released on May 3, 2005. The album is his first with backing band The Cardinals, and the first of three albums released in 2005. Cold Roses has sold over 159,000 copies in the United States. Although all the tracks can fit on a standard 80-minute disc, it was released as a double album with packaging and CDs designed to make it look like a vinyl LP. The album was also released in a standard 2-disc jewel case.",
      tracks: []},
    { id: 7,
      releaseDate: "09/27/2005",
      title: "Jacksonville City Nights",
      description: "Jacksonville City Nights is the seventh studio album by Ryan Adams, released on September 27, 2005. The album is Adams' second with The Cardinals. By 2007, the album had sold 100,000 copies in the United States and 158,000 worldwide. The album was recorded live in the studio, without overdubs. The title is a reference to Adams' hometown of Jacksonville, North Carolina, which has been referenced throughout his career. Several limited American releases contained a DVD entitled September (which was originally intended to be the title of the album), which featured a 20 minute documentary about the band on the road and in the studio.",
      tracks: []},
    { id: 8,
      releaseDate: "12/19/2005",
      title: "29",
      description: "29 is the eighth studio album by Ryan Adams, released on December 19, 2005. Produced by Ethan Johns, and recorded prior to the formation of backing band The Cardinals, the album was the last of three released in 2005. Session guitarist JP Bowersock would later go on to join the Cardinals, subsequently recording Cold Roses and Jacksonville City Nights alongside Adams. The album's cover art was drawn by Adams. The album has sold 81,000 copies in the United States and 153,000 worldwide. In November 2009, the album was number 54 on a list of \"The 100 best pop albums of the Noughties\" by The Times music critics.",
      tracks: []},
    { id: 9,
      releaseDate: "06/26/2007",
      title: "Easy Tiger",
      description: "Easy Tiger is the ninth studio album by Ryan Adams, released on June 26, 2007. Although the album is attributed solely to Adams, Easy Tiger features The Cardinals as his backing band, with Adams stating: \"The only real concept of this record was complete and utter collaboration.\" Adams states that the album contains \"very, very simple, very easy songs that, in my opinion, were written on the periphery of some more complex work.\" Easy Tiger marks the first appearance of both guitarist Neal Casal and bassist Chris Feinstein, following the departures of J.P. Bowersock and Catherine Popper, respectively.",
      tracks: []},
    { id: 10,
      releaseDate: "10/28/2008",
      title: "Cardinology",
      description: "Cardinology is the tenth studio album by Ryan Adams, and fourth album with his backing band The Cardinals, released on October 28, 2008. The album marks his final recording session with The Cardinals. According to Adams, the album \"is about the moment when you recognize the difference between ego and pride and your sense of service to your friends, family or yourself. Once you've had that epiphany, you can't really turn around and pretend that you haven't. It's about accountability.\" The album was placed at #14 on Rolling Stone's 50 Best Albums of 2008 list. The magazine also placed \"Magick\" at #13 on their 100 Best Singles of 2008 list. The album has sold over 250,000 copies worldwide.",
      tracks: []},
    { id: 11,
      releaseDate: "Orion",
      title: "05/18/2010",
      description: "Orion is the 11th studio album by Ryan Adams, released on May 18th, 2010. Described as Adams' first \"fully-realized sci-fi metal concept album,\" Orion was released on a limited vinyl run, and could only be purchased from the PAX AM online store. There are no plans for a wide release. Orion was recorded in 2006, and is Adams' first full-length album release since splitting from The Cardinals in March of 2009.",
      tracks: []},
    {
      id: 12,
      releaseDate: "12/14/2010",
      title: "III/IV",
      description: "III/IV is the twelfth studio album by Ryan Adams, released on December 14, 2010. The album is his fifth with backing band The Cardinals. A double album, III/IV was recorded prior to bassist Catherine Popper's departure, and also marks guitarist and backing vocalist Neal Casal's recording debut for the band. The album's title stems from \"the idea that Cold Roses is volumes one and two, and this was a logical step that the Cardinals had taken forward as a band effort. The tracks shared the democratic process of a band. It will always be an amazing look into the world of a great band during one of its most versatile line-ups.\"",
      tracks: []},
    {
      id: 13,
      releaseDate: "10/11/2011",
      title: "Ashes & Fire",
      description: "Ashes & Fire is the thirteenth studio album by Ryan Adams. The album entered the UK Albums Chart at number 9, making his best position in the UK. In the US, it debuted at number 7, making Ashes & Fire his second top 10 album since Easy Tiger. Regarding the album, Adams noted, \"The record is obsessed with time. I believe that there is a kinder view of the self. I'm passing through my own life as a ghost, and looking at these pieces and places in my life. I'm looking at California, and the idea of being lost and found at the same time.\"",
      tracks: []},
    {
      id: 14,
      releaseDate: "09/09/2014",
      title: "Ryan Adams",
      description: "Ryan Adams is the fourteenth studio album by Ryan Adams, released on September 9th, 2014. The album features an atmospheric rock-based aesthetic, in comparison to its primarily acoustic predecessor, Ashes & Fire.Self-produced by Adams, and his recording partner Mike Viola, the album was preceded by the single, \"Gimme Something Good\".  The album earned two nominations at the 56th Annual Grammy Awards in Best Rock Song for \"Gimme Something Good\" and Best Rock Album.",
      tracks: []
    },
    {
      id: 15,
      releaseDate: "04/21/2015",
      title: "Live at Carnegie Hall",
      description: "The 2015 concert set Live at Carnegie Hall — released just months after Ryan’s exquisitely sculpted 2014 eponymous set — showcases two entire concerts, both largely solo, intimate, and loose.This live Ryan Adams album was released on April 21, 2015.",
      tracks: []
    },
    {
      id: 16,
      releaseDate: "09/21/2015",
      title: "1989",
      description: "1989 is the fifteenth studio album by Ryan Adams, released digitally on September 21st, 2015. The album is a track-by-track cover of Taylor Swift's album of the same name. It debuted at number 7 on the US Billboard 200 chart, one position ahead of Taylor Swift's 1989, which was in its 48th week on the chart.When recording the album, Adams said he found a sound somewhere between Bruce Springsteen's Darkness on the Edge of Town and The Smiths' Meat Is Murder.",
      tracks: []
    },
    {
      id: 17,
      releaseDate: "02/17/2017",
      title: "Prisoner",
      description: "Prisoner is the sixteenth studio album by Ryan Adams. It was released on February 17, 2017, and debuted at number eight on the US Billboard 200. Prisoner was preceded by the singles \"Do You Still Love Me?\", \"To Be Without You\", and \"Doomsday\". AllMusic called it \"charming\", and stated, \"it's not a record that wallows in hurt, it's an album that functions as balm for bad times.\" Slant Magazine stated that Prisoner is \"one of Adams's most sonically artful albums to date.\"",
      tracks: []
    },
    {
      id: 18,
      releaseDate: "12/11/2020",
      title: "Wednesdays",
      description: "Ryan Adams' first album in three years, Wednesdays, is purely raw, vulnerable, and honest. The music takes you on a deep dive exploring the complex heart of Ryan Adams, through a journey of love, pain, and heartbreak. The album so effortlessly creates an immediate connection with anyone who has ever experienced love lost - the type of love that haunts you in quiet places of your mind. While the lyrics walk you through the vast emotional layers of grief, they also remind you of the rich memories of a love that will forever remain a part of you.",
      tracks: []
    },
    {
      id: 19,
      releaseDate: "06/11/2021",
      title: "Big Colors",
      description: "Big Colors is the soundtrack to a movie from 1984 that exists only in my soul. It’s a cliché inside a watercolor painting of neon blue smoke rising up off summer streets in the night. It’s the most New York California album I could cut loose from my musical soul, and for me as both a guitar player and songwriter, this is the zenith point dream time. While I won’t be able to match this album for its depth and broad color forms in the future, this is the sound of my soul and a door to a place I’ll be returning to again. The treasures in our past are the shamanic visions of the future when the destination is dream zone 3000. This is that. I’m only dreaming in Big Colors now. - RA 2021",
      tracks: []
    },
  ]
};