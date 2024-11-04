namespace Solarsystem {
    interface Data {
        orbit: Data[];
        size: number;
        color: string;
        speed: number;
        orbitradius: number;
        description: string;
        position?: Vector;
    }

    export const data: Data = {
        orbit: [{
            orbit: [],
            size: 4.9,
            color: "#b1adad",
            speed: (6 * Math.PI / 180) / 0.3,
            orbitradius: 0.3 * 100,
            description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C). Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days."
        },
        {
            orbit: [],
            size: 12.1,
            color: "#e3bb76",
            speed: (6 * Math.PI / 180) / 0.6,
            orbitradius: 0.65 * 100,
            description: "Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets. Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains."
        },
        {
            orbit: [],
            size: 12.76,
            color: "#6b93d6",
            speed: 6 * Math.PI / 180,
            orbitradius: 1 * 100,
            description: "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means \"the ground.\" There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun."
        },
        {
            orbit: [],
            size: 6.8,
            color: "#e77d11",
            speed: (6 * Math.PI / 180) / 2,
            orbitradius: 1.52 * 100,
            description: "Mars - the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago."
        },
        {
            orbit: [],
            size: 30,
            color: "#d8ca9d",
            speed: (6 * Math.PI / 180) / 12,
            orbitradius: 2.2 * 100,
            description: "Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis. Jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."
        },
        {
            orbit: [],
            size: 25,
            color: "#fceead",
            speed: (6 * Math.PI / 180) / 30,
            orbitradius: 3.1 * 100,
            description: "Saturn is the sixth planet from the Sun, and the second-largest planet in our solar system. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons."
        },
        {
            orbit: [],
            size: 15,
            color: "#afdbf5",
            speed: (6 * Math.PI / 180) / 84,
            orbitradius: 3.9 * 100,
            description: "Uranus is the seventh planet from the Sun, and it has the third largest diameter of planets in our solar system. Uranus appears to spin sideways. Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball."
        },
        {
            orbit: [],
            size: 14.7,
            color: "#3d5ef9",
            speed: (6 * Math.PI / 180) / 165,
            orbitradius: 3.1,
            description: "Neptune is the eighth and most distant planet in our solar system. Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846."
        }],
        size: 20,
        color: "yellow",
        speed: 0,
        orbitradius: 0,
        description: "The Sun's gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy.",
        position: new Vector(850, 400)
    }

}