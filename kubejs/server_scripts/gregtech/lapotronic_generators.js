/**
 * Lapotronic Generator multiblock
 */

ServerEvents.recipes(event => {
    // Singleblock Lapotronic Generators (no LV one)
    event.recipes.gtceu.shaped("monilabs:mv_lapotronic", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:long_silver_rod",
        B: "gtceu:mv_sensor",
        C: "gtceu:energetic_alloy_quadruple_wire",
        D: "gtceu:mv_machine_hull",
        E: "gtceu:mv_electric_motor",
        F: "gtceu:copper_single_cable"
    }).addMaterialInfo()
    event.recipes.gtceu.shaped("monilabs:hv_lapotronic", [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:long_electrum_rod",
        B: "gtceu:hv_sensor",
        C: "gtceu:vibrant_alloy_quadruple_wire",
        D: "gtceu:hv_machine_hull",
        E: "gtceu:hv_electric_motor",
        F: "gtceu:gold_single_cable"
    }).addMaterialInfo()

    // LLG
    event.recipes.gtceu.shaped("monilabs:large_lapotronic_generator", [
        "LSL",
        "WHW",
        "GCG"
    ], {
        W: "gtceu:end_steel_quadruple_wire",
        C: "#gtceu:circuits/iv",
        L: "gtceu:energium_block",
        H: "gtceu:ev_machine_hull",
        G: "gtceu:ev_electric_motor",
        S: "gtceu:ev_sensor"
    }).addMaterialInfo()

    // ELG
    event.recipes.gtceu.shaped("monilabs:extreme_lapotronic_generator", [
        "LSL",
        "WHW",
        "GCG"
    ], {
        W: "gtceu:neptunium_palladium_aluminium_quadruple_wire",
        C: "#gtceu:circuits/luv",
        L: "gtceu:lapotron_block",
        H: "gtceu:iv_machine_hull",
        G: "gtceu:iv_electric_motor",
        S: "gtceu:iv_sensor"
    }).addMaterialInfo()

    event.recipes.gtceu.assembler("energetic_titanium_casing")
        .itemInputs("2x gtceu:double_titanium_plate", "gtceu:energium_block", "gtceu:titanium_frame")
        .itemOutputs("2x monilabs:energetic_titanium_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.assembler("lapotronic_tungstensteel_casing")
        .itemInputs("2x gtceu:double_tungsten_steel_plate", "gtceu:lapotron_block", "gtceu:tungsten_steel_frame")
        .itemOutputs("2x monilabs:lapotronic_tungstensteel_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    // Fuels
    function LapoFuel(mod, item, time, eut) {
        event.recipes.gtceu.lapotronic(item)
            .itemInputs(`${mod}:${item}`)
            .duration(time * 20)
            .EUt(eut)
    }

    LapoFuel("minecraft", "diamond", 64, -GTValues.V[GTValues.MV])
    LapoFuel("minecraft", "emerald", 32, -GTValues.V[GTValues.MV])
    LapoFuel("gtceu", "sapphire_gem", 32, -GTValues.V[GTValues.MV])
    LapoFuel("gtceu", "energium_gem", 40, -GTValues.V[GTValues.MV])
    LapoFuel("gtceu", "lapotron_gem", 72, -GTValues.V[GTValues.MV])
    LapoFuel("gtceu", "topaz_gem", 64, -GTValues.V[GTValues.MV])
    LapoFuel("gtceu", "blue_topaz_gem", 64, -GTValues.V[GTValues.MV])
    LapoFuel("gtceu", "dilithium_gem", 24, -GTValues.V[GTValues.MV])

    // Coins
    function formingPressCoin(material) {
        event.recipes.gtceu.forming_press(`thermal:${material}_coin_ingot`)
            .notConsumable("thermal:press_coin_die")
            .itemInputs(`#forge:ingots/${material}`)
            .itemOutputs(`3x thermal:${material}_coin`)
            .duration(120)
            .EUt(GTValues.VA[GTValues.ULV])
            .addMaterialInfo(true)
        event.recipes.gtceu.forming_press(`thermal:${material}_coin_nugget`)
            .notConsumable("thermal:press_coin_die")
            .itemInputs(`3x #forge:nuggets/${material}`)
            .itemOutputs(`thermal:${material}_coin`)
            .duration(120)
            .EUt(GTValues.VA[GTValues.ULV] / 3)
            .addMaterialInfo(true)
    }
    formingPressCoin("iron")
    formingPressCoin("gold")
    formingPressCoin("copper")
    formingPressCoin("netherite")
    formingPressCoin("tin")
    formingPressCoin("lead")
    formingPressCoin("silver")
    formingPressCoin("nickel")
    formingPressCoin("bronze")
    formingPressCoin("electrum")
    formingPressCoin("invar")
    formingPressCoin("signalum")
    formingPressCoin("lumium")
    formingPressCoin("enderium")

    // The cheaper coins mostly keep an equivalent production
    LapoFuel("thermal", "iron_coin", 3.2, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "copper_coin", 3.2, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "tin_coin", 3.2, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "bronze_coin", 3.2, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "lead_coin", 4.8, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "silver_coin", 4.8, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "invar_coin", 4.8, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "gold_coin", 6.4, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "nickel_coin", 6.4, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "electrum_coin", 6.4, -GTValues.V[GTValues.MV])
    LapoFuel("thermal", "netherite_coin", 32, -GTValues.V[GTValues.MV])
    // All 3 of these use advanced means of productions, which is reflected in their values
    LapoFuel("thermal", "lumium_coin", 32, -GTValues.V[GTValues.HV])
    LapoFuel("thermal", "signalum_coin", 48, -GTValues.V[GTValues.EV])
    LapoFuel("thermal", "enderium_coin", 56, -GTValues.V[GTValues.IV])
})
