module App


open Fable
open Elmish
open Elmish.React
open Feliz

let init () = (), Cmd.none
let update msg model = model, Cmd.none
let view model dispatch = 
    Html.div [
        Html.text "a"
    ]
    
Program.mkProgram init update view
|> Program.withReactSynchronous "app"
|> Program.run

