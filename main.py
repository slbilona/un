def on_button_pressed_a():
    if Math.random_boolean():
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_leds("""
            . . # . .
                        . # . # .
                        . . # # .
                        . # . . .
                        . # # # .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_string("Hey !")

def on_every_interval():
    basic.show_number(input.temperature())
loops.every_interval(60000, on_every_interval)

def on_forever():
    basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
