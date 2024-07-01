Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class SwordWorld25SpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "limited", default: 0x0080FF, name: "speeds.limited"},
                {id: "normal", default: 0x80FF00, name: "speeds.normal"},
                {id: "max", default: 0xFF8000, name: "speeds.max"}
            ];
        }

        getRanges(token) {
            const systemData = token.actor.system;

            const ranges = [
                {range: systemData.attributes.move.limited, color: "limited"},
                {range: systemData.attributes.move.normal, color: "normal"},
                {range: systemData.attributes.move.max, color: "max"},
            ];

            return ranges;
        }
    }

    dragRuler.registerModule("drag-ruler-integration-for-sw25", SwordWorld25SpeedProvider);
})