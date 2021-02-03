while True: 
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) >0 or input.rotation(Rotation.PITCH) <0:
        light.set_all(light.rgb(255, 165, 0))
    else: 
        light.clear()
        