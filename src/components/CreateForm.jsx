import React from "react";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { Container } from "@mui/system";

function CreateForm(){

    return (
        <Container  >
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product name.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Description</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product description.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Photo</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product photo.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Size</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product size.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Color</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product color.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Rated</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product rated.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Price</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product price.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} m={2}>
                    <FormControl style = {{width: '20rem'}}>
                        <InputLabel htmlFor="my-input">Status</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Product status.</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid item md={12}>
                <Button variant="contained" color='primary'>
                    Submit
                </Button>
            </Grid>
        </Container>

        
    )
}
export default CreateForm;