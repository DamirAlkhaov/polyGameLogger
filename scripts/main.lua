--main url
URL         =       "URL?id="
--logging url
LOG_URL     =       "URL?id="
--API key
SECRET_KEY  =       "putKeyHere"

Chat:BroadcastMessage("This game uses Damir's Chat Logger v0.1.1")

function send(player, color, desc)
    Http:Post(URL..player.UserID.."&username="..player.Name.."&color="..color.."&desc="..desc.."&key="..SECRET_KEY, "" , function (data, error, errmsg)
        if (error) then
            print(errmsg)
        end
        
    end, {})
end

function log(player, message)
    Http:Post(LOG_URL..player.UserID.."&username="..player.Name.."&msg="..message.."&key="..SECRET_KEY, "" , function (data, error, errmsg)
        if (error) then
            print(errmsg)
        end
        
    end, {})
end

game["Players"].PlayerAdded:Connect(function (player)
    print(player.Name .. " joined the game!")
    wait(1)
    send(player, "0x0099E1", player.Name.." has joined the server.")
    player.Chatted:Connect(function (message)
        log(player, message)
    end)
end)

game["Players"].PlayerRemoved:Connect(function (player)
    send(player, "0xED4245", player.Name.." has left the server.")
end)
