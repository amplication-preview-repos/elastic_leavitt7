import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { QueryRequestList } from "./queryRequest/QueryRequestList";
import { QueryRequestCreate } from "./queryRequest/QueryRequestCreate";
import { QueryRequestEdit } from "./queryRequest/QueryRequestEdit";
import { QueryRequestShow } from "./queryRequest/QueryRequestShow";
import { ExecutionResultList } from "./executionResult/ExecutionResultList";
import { ExecutionResultCreate } from "./executionResult/ExecutionResultCreate";
import { ExecutionResultEdit } from "./executionResult/ExecutionResultEdit";
import { ExecutionResultShow } from "./executionResult/ExecutionResultShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SQLTranslator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="QueryRequest"
          list={QueryRequestList}
          edit={QueryRequestEdit}
          create={QueryRequestCreate}
          show={QueryRequestShow}
        />
        <Resource
          name="ExecutionResult"
          list={ExecutionResultList}
          edit={ExecutionResultEdit}
          create={ExecutionResultCreate}
          show={ExecutionResultShow}
        />
      </Admin>
    </div>
  );
};

export default App;
