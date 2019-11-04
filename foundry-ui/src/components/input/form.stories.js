import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "..";
import { SubmitButton } from "..";
import Form from "./form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

storiesOf("Input", module)
  .add(
    "simple input",
    () => (
      <Form>
        <Input label="hello" name="hello" color="secondary" />
        <Input label="hi" name="hi" color="primary" />
      </Form>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    "Form Story",
    () => {
      const [isSubmitting, setSubmit] = React.useState(false);
      return(
        <>
        <div style={{width: "400px", padding: "20px"}}>
      <Form
        onSubmit={async data => {
          setSubmit(true);
          await sleep(2000);
          if (data.username === "bill") {
            setSubmit(false);
            alert(JSON.stringify(data));
         
          } else {
            setSubmit(false);
            alert("There is error");
     
          }
        }}
        defaultValues={{ username: "" }}
      >
        <Input
          placeholder="me@me.com"
          label="email"
          name="email"
          type="email"
          color="secondary"
        />
           <Input
          placeholder="password"
          label="password"
          name="password"
          type="password"
          color="secondary"
        />
        
        <SubmitButton isSubmitting={isSubmitting}/>
      </Form>
      </div>
      <div style={{width: "400px", padding: "20px", backgroundColor: "#333"}}>
      <Form
        onSubmit={async data => {
          setSubmit(true);
          await sleep(2000);
          if (data.username === "bill") {
            setSubmit(false);
            alert(JSON.stringify(data));
         
          } else {
            setSubmit(false);
            alert("There is error");
     
          }
        }}
        defaultValues={{ username: "" }}
      >
        <Input
          placeholder="me@me.com"
          label="email"
          name="email"
          type="email"
          variant="filled"
          color="primary"
        />
           <Input
          placeholder="password"
          label="password"
          name="password"
          type="password"
          variant="filled"
          color="primary"
        />
        
        <SubmitButton isSubmitting={isSubmitting}/>
      </Form>
      </div>
      </>
    )},
    {
      info: { inline: true }
    }
  );
