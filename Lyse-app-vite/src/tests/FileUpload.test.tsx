// import {React} from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import FileUpload from "../components/reusable/InputBox"

// console.log("started file upload testing")

describe("FileUpload", () => {
    it("should update file state when a file is selected", () => {
        render(<FileUpload yPosition="bottom-0"/>);

        const fileInput = screen.getByTestId("file-input") as HTMLInputElement

        const file  = new File(["dummy content"], "test.csv", {type: ".txt, .csv, .xls, .xlsx"}) 

        fireEvent.change(fileInput, {
            target: {files: [file]}
        })

        expect(screen.getByTestId("file-name")).toHaveTextContent("test.csv")
    })
})

describe("Should send updated query message and file uploaded to api", ()=>{
    
} )