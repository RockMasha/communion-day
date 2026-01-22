import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Point } from "@/components/modules/Point/Point";
import { MapImage, MapWrapper1, MapWrapper2 } from "./Map.styled";
import { points } from "@/shared/consts/points";
import { useSelector } from "react-redux";
import { selectActivePoint } from "@/store/slices/activePoint/activePointSelectors";
import { useEffect, useState } from "react";
import { getAllUser } from "@/api/getAllUser";
import type { student } from "@/types";
import { selectUserId } from "@/store/slices/user/userSelectors";

export function Map() {
  const [users, setUsers] = useState<student[]>([]);
  const activePointId = useSelector(selectActivePoint);
  const userPoint = useSelector(selectUserId);

  const setAllUsers = async () => {
    const users = await getAllUser();
    if (!users?.message) {
      setUsers(users);
    }
  };

  useEffect(() => {
    setAllUsers();
  }, []);

  return (
    <TransformWrapper minScale={1} maxScale={5} initialScale={1} centerOnInit>
      <TransformComponent
        wrapperStyle={{
          width: "100%",
          height: "10%",
        }}
      >
        <MapWrapper1>
          <MapWrapper2>
            <MapImage src="images/ukraine.svg" />
            {users.length > 0 && (
              <>
                {points.map((p) => {
                  const user = users[Number(p.id) - 1];
                  if (!user) {
                    return;
                  }

                  const isUserPoint = userPoint == user.id ? true : false;
                  const isActivePoint =
                    activePointId == String(user.id) ? true : false;

                  return (
                    <>
                      <Point
                        key={p.id}
                        left={p.left}
                        top={p.top}
                        data={{
                          fill: user.isActivated,
                          id: String(user.id),
                        }}
                        isActive={isActivePoint}
                        isUserPoint={isUserPoint}
                      />
                    </>
                  );
                })}
              </>
            )}
          </MapWrapper2>
        </MapWrapper1>
      </TransformComponent>
    </TransformWrapper>
  );
}
