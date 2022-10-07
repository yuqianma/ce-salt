var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoibWF5cTA0MjIiLCJhIjoiY2phamMwOHV4MjllajMzbnFyeTMwcmZvYiJ9.aFMw4Aws5zY9Y4NwYqFMlQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    // inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Salt and State Monopoly',
    subtitle: `LowRes 22 Critical Experiences Assignment 1`,
    byline: `By Yuqian Ma`,
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'ch1',
            alignment: 'left',
            hidden: false,
            title: 'Salt in China',
            // image: './path/to/image/source.png',
            description: `Salt, salt production, and salt taxes played key roles in Chinese history, economic development, and relations between state and society. The lure of salt profits led to technological innovation and new ways to organize capital. Debate over government salt policies brought forth conflicting attitudes toward the nature of government, private wealth, the relation between the rich and the poor, while the administration of these salt policies was a practical test of a government's competence.`,
            location: {
                center: { lon: 102.86190, lat: 34.16335 },
                zoom: 2.87,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'enableScroll',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ch2',
            alignment: 'right',
            hidden: false,
            title: 'Xiechi Lake',
            // image: './path/to/image/source.png',
            description: `Xiechi Lake (Chinese: 解池), also called Yuncheng yanchi (Yuncheng Salt Lake). The harvest of salt from the surface dates back to at least 6000 BC, making it one of the oldest verifiable saltworks.`,
            location: {
                center: { lon: 111.03240, lat: 34.99360 },
                zoom: 13.77,
                pitch: 50.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: 'Salt Tax',
            // image: './path/to/image/source.png',
            description: `
            <p>In the eighth century B.C., <b>Guan Zhong</b> created a salt monopoly as part of his economic reforms in Qi.</p>
            <p>It is the beginning of salt monopoly in China.</p>
            <p style="opacity:0.6;">Guan Zhong argued that direct taxes created resentment among the people, but extolled indirect taxes, such as those on salt and iron:</p>
            <p style="opacity:0.6;">If you were going to issue an order, "I am going to collect head money upon all of you people, both adults and children," they would certainly remonstrate loudly and angrily against you. However, if you take firm control over the policy on salt, the people cannot manage to dodge it even though you are going to take a profit of one hundred times over.”</p>
            `,
            location: {
                center: { lon: 102.86190, lat: 34.16335 },
                zoom: 2.87,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableScroll',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

// document.body.addEventListener("wheel", (e) => {
//     console.log(e);
// });

function disableScroll() {
    console.log("disableScroll");
    // scroller.disable();
    document.body.style.overflowY = "hidden";
}

function enableScroll() {
    console.log("enableScroll");
    // scroller.enable();
    document.body.style.overflowY = "scroll";
}
