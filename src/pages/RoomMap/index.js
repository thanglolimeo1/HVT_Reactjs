import React from 'react';
import LoadingMask from "react-loadingmask";
import Main from './../../components/organisms/Main';
import "react-loadingmask/dist/react-loadingmask.css";

function RoomMap(props) {
  return (
    <Main>
      <div>
        <LoadingMask loading={true} text={"loading..."}>
          <div style={{ width: 500, height: 300 }}>Compoment You want to display</div>
        </LoadingMask>
      </div>
    </Main>
  );
}

export default RoomMap;