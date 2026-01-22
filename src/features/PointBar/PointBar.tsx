import { useSelector } from "react-redux";
import { BarContent, BarText, BarWrapper } from "./PointBar.styled";
import { selectActivePoint } from "@/store/slices/activePoint/activePointSelectors";
import { useEffect, useState } from "react";
import CircleLoader from "@/components/ui/CircleLoader/CircleLoader";
import { getStudent } from "@/api/getStudent";

export function PointBar() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const activePointId = useSelector(selectActivePoint);

  const getUser = async () => {
    if (activePointId) {
      setLoading(true);
      const data = await getStudent(activePointId);
      setLoading(false);
      setUser(data)
    }
  };

  useEffect(() => {
    getUser();
  }, [activePointId]);


  const pointData = {
    user: {
      givenName: "Mariia",
      familyName: "Bondarenko",
      className: "10-B",
    },
  };

  return (
    <>
      <BarWrapper>
        <BarContent>
          {loading && <CircleLoader size="20px" />}
          {!loading && (
            <>
              {activePointId ? (
                <>
                  <BarText>
                    {user.givenName} {user.familyName}
                  </BarText>
                  <BarText>{user.className}</BarText>
                </>
              ) : (
                <>
                  <BarText>Тикай на заповнені точечки</BarText>
                  <BarText>та дізнавайся її запалювача!</BarText>
                </>
              )}
            </>
          )}
        </BarContent>
      </BarWrapper>
    </>
  );
}
