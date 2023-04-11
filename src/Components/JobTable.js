import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// display the coop and first job data in a table.
class JobTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
    }

    render() {

        let data = this.state.data;

        // what the columns will contain and what properties they have
        const columns = [
            {
              field: 'employer',
              headerName: 'Employer',
              width: 400,
              editable: false,
            },
            {
              field: 'degree',
              headerName: 'Degree',
              width: 150,
              editable: false,
            },
            {
              field: 'city',
              headerName: 'City',
              width: 200,
              editable: false,
            },
          ];
          
          // create the content for the rows
          let rows = [];

          // fill in the data from the array given
          for (let i = 0, len = data.length; i < len; i++) {
            let job = data[i];
            // create an object for each row, filling in each column
            let jobRow = {
                id: i,
                employer: job.employer,
                degree: job.degree,
                city: job.city,
            };
            // add the row
            rows.push(jobRow);
          }


        return (
            <Box sx={{ height: 700, width: '80%', margin: 'auto' }} className="jobTable">
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 15,
                    },
                  },
                }}
                pageSizeOptions={[5]}
              />
            </Box>
          );
    }
  
}

export default JobTable;