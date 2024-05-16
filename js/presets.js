
class PresetAll extends Preset {
    constructor(isDefault, title = 'выбрать всё') {
        super(title, [], false, isDefault);
    }
}

class PresetNothing extends Preset {
    constructor(isDefault) {
        super('ничего', [], true, isDefault);
    }
}
