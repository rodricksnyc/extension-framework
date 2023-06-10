import React, { useState, useCallback, useContext, useEffect } from "react";
import { Space, FieldText, Button, Form, Heading, SpaceVertical } from "@looker/components";
import { Looker40SDK } from "@looker/sdk";
import { LookerEmbedSDK } from "@looker/embed-sdk";
import { ExtensionContext } from "@looker/extension-sdk-react";
import styled from "styled-components";
import { connection, scratch_schema } from "../../../utils/writebackConfig";
import { values } from "lodash";
import { getVisQueryBody } from "./helpers/getVisQueryBody";

const QueryTwo = ({ queryId }) => {
  const { core40SDK: sdk } = useContext(ExtensionContext);

  // const [queryId, updateQueryId] = useState();
  // useEffect( async () => {
  //
  //    sdk.ok(sdk.run_query({query_id: '350248', result_format: 'json'})).then((res) => {
  //
  //     // console.log("this is data", res);
  //     //
  //     // console.log(res[0])
  //
  //   });
  //
  // }, []);

  // const [dashboardData, setDashboardData] = useState([]);
  //
  // useEffect( async () => {
  //   const queryBody = ({
  //     model: 'rebecca_thompson_project',
  //     view: 'order_items',
  //     fields: [
  //       'users.customer_full_name',
  //       'inventory_items.product_category',
  //       'inventory_items.id',
  //       'inventory_items.product_department',
  //       'inventory_items.product_sku'
  //     ],
  //     total: false,
  //     client_id: 350248
  //
  //   })
  // let response = await  sdk.ok(sdk.dashboard('Y5mgkGp6GY2w9YcwK1bGP3')).then((res) => {
  //     Promise.all(
  //       res.dashboard_elements.map(
  //         (element) =>
  //           new Promise((resolve, reject) => {
  //               sdk.ok(sdk.create_query(queryBody))
  //               .then((res) => {
  //
  //                 console.log("ksdjbvksd", res)
  //
  //               })
  //               .catch((err) => {
  //                 console.log("err", err);
  //                 reject();
  //               });
  //           })
  //       )
  //     ).then((values) => {
  //       setDashboardData(values);
  //
  //     });
  //   });
  // }, []);



  // useEffect( async () => {
  //
  //
  // let fields = await sdk.ok(
  //   sdk.lookml_model_explore('rebecca_thompson_project', 'order_items', 'fields')
  // )
  //
  //         console.log("fields", fields)
  //         const dimensions = fields["fields"]["dimensions"];
  //         const measures = fields["fields"]["measures"];
  //
  //         let dims = filterOutValues(dimensions);
  //         let meas = filterOutValues(measures);
  //         let filters = dims.concat(meas);
  //         return {
  //           filters,
  //           measures: meas,
  //           dimensions: dims,
  //         };
  //
  //     console.log("dimensions", dims)
  //
  // }, []);
  const [filters, updateFilters] = useState();
  const [fields, updateFields] = useState();

  useEffect(() => {
  async function fetchData() {

    let fieldsValue = await sdk.ok(
      sdk.lookml_model_explore('rebecca_thompson_project', 'order_items', 'fields')
    )


            const dimensions = fieldsValue["fields"]["dimensions"];
            const measures = fieldsValue["fields"]["measures"];



            console.log("dimensions", dimensions)
            console.log("measures", measures)


            let dims = filterOutValues(dimensions);
            let meas = filterOutValues(measures);
            let fields = dims.concat(meas);

            return {
              fields,
              measures: meas,
              dimensions: dims,
            };
  }

  fetchData();

}, [filters, fields]);



const filterOutValues = (values) => {
console.log(values)
    let newVals = []

    values?.map((d) => {
      if (d.tags.length > 0) {
        d.tags.map((t) => {
          let tagKey = t.split(':')[0]
          let tagValue = t.split(':')[1]
          d[tagKey] = tagValue
        })
        newVals.push(d)

      }
    })
    return newVals
  }


 // tags : "dimension: <name of dimension>"
 // tags : "measures: <name of measure>"
 // tags : "filter: <name of filter>"
 // label_short: "Created Day of Week Index"
//this is what the object would look like below


  const fieldOptions = [
  {
  fields: "Purchase Amount",
  label_short: "Total Sale Price"

  },

  ];



  const filterOptions = [
  {
  filters: "Created Date",
  label_short: "Created Week of Year"
  },

  ];



  return (

    <div>


    </div>
  );
};

export default QueryTwo;
