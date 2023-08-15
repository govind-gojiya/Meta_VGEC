import { LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, CssBaseline, FormControlLabel, FormLabel, Grid, InputLabel, Link, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom';

const defaultTheme = createTheme();

const SignUp = () => {

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [enrollment, setEnrollment] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [year, setYear] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [proof, setProof] = React.useState("");

  const joinMeHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("enrollment", enrollment);
    formData.append("branch", branch);
    formData.append("year", year);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender)
    formData.append("proof", proof);
    console.log(formData);

    Navigate('/');
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={() => console.log("submit")} sx={{ mt: 1 }}>
              <Stack direction={"horizontal"} gap={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  name="fname"
                  autoComplete="fname"
                  autoFocus
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="lname"
                  label="Last Name"
                  id="lname"
                  autoComplete="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </Stack>
              <TextField
                margin="normal"
                required
                fullWidth
                id="enrollment"
                label="Enrollment No."
                name="enrollment"
                autoComplete="enrollment"
                value={enrollment}
                onChange={(e) => setEnrollment(e.target.value)}
              />
              <Stack direction={"horizontal"} gap={2} marginY={2}>
                <TextField
                  id="select-branch"
                  select
                  fullWidth
                  label="Branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <MenuItem key={"ce"} value={"Computer"}>Computer</MenuItem>
                  <MenuItem key={"it"} selected value={"IT"}>Information Technology</MenuItem>
                  <MenuItem key={"che"} value={"Chemical"}>Chemical</MenuItem>
                  <MenuItem key={"mec"} value={"Mechnical"}>Mechnical</MenuItem>
                  <MenuItem key={"ee"} value={"Electric"}>Electric</MenuItem>
                  <MenuItem key={"pe"} value={"Power Electronic"}>Power Electronic</MenuItem>
                  <MenuItem key={"ic"} value={"IC"}>IC</MenuItem>
                </TextField>
                <TextField
                  id="select-year"
                  fullWidth
                  select
                  label="Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <MenuItem key={1} selected value={1}>First</MenuItem>
                  <MenuItem key={2} value={2}>Second</MenuItem>
                  <MenuItem key={3} value={3}>Third</MenuItem>
                  <MenuItem key={4} value={4}>Fourth</MenuItem>
                </TextField>
              </Stack>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone"
                id="phone"
                autoComplete="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender-radio"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
              <InputLabel id="select-event" margin={1}>Proof </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="proof"
                type="file"
                id="proof"
                value={proof}
                onChange={(e) => setProof(e.target.files[0])}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={joinMeHandler}
              >
                Join Me
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="connect" variant="body2">
                    {"You have already account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  )
}

export default SignUp