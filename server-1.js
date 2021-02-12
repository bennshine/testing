const express = require("express");
const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// for create
app.post("/api/HCDataVis", (req, res) => {
	const {
		ReportingTool,
		ReportName,
		DataSource,
		Description,
		Other,
	} = req.body;

	fetch("http://localhost:8000/api/HCDataVis", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			ReportingTool,
			ReportName,
			DataSource,
			Description,
			Other,
		}),
	})
		.then(() => {
			res.send("done. success.");
		})
		.catch((e) => {
			res.send(e);
		});
});

// for update
app.post("/api/HCDataVis/:id/update", (req, res) => {
	const {
		ReportingTool,
		ReportName,
		DataSource,
		Description,
		Other,
	} = req.body;

	// id for document being updated
	const id = req.params.id;

	// it's just for demonstration, use these variables however you wish e.g. store in database
	res.send(`
		<p>
			${id} <hr>
			${ReportingTool} <br>
			${ReportName} <br>
			${DataSource} <br>
			${Description} <br>
			${Other} <br>
		</p>
	`);
});

app.listen(3000, () => {
	console.log("server is running on: http://localhost:3000");
});
