--main url
URL     =   "URL?id="
--logging url
LOG_URL =   "URL?id="

Chat:BroadcastMessage("This game uses Damir's Chat Logger v0.0.3")

--main player joined/left func
function send(player, color, desc)
    Http:Post(URL..player.UserID.."&username="..player.Name.."&color="..color.."&desc="..desc, "" , function (data, error, errmsg)
        if (not error) then
            print("SUCCESS")
        else
            print(errmsg)
        end
    end, {})
end

--logging func
function log(player, message)
    Http:Post(LOG_URL..player.UserID.."&username="..player.Name.."&msg="..message, "" , function (data, error, errmsg)
        if (not error) then
            print("SUCCESS")
        else
            print(errmsg)
        end
    end, {})
end

game["Players"].PlayerAdded:Connect(function (player)
    print(player.Name .. " joined the game!")
    wait(1)
    send(player, "#0099ff", player.Name.." has joined the server.")
    player.Chatted:Connect(function (message)
        log(player, message)
    end)
end)

game["Players"].PlayerRemoved:Connect(function (player)
    send(player, "#f54545", player.Name.." has left the server.")
end)
