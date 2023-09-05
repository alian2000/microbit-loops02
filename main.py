def on_forever():
    while True:
        basic.show_string("Hello!")
        basic.pause(60000)
basic.forever(on_forever)
