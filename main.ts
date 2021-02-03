while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 0 || input.rotation(Rotation.Pitch) < 0) {
        light.setAll(light.rgb(255, 165, 0))
    } else {
        light.clear()
    }
    
}
