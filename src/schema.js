const {nexusSchemaPrisma} = require('nexus-plugin-prisma/schema')
const { makeSchema, objectType, queryType, mutationType} = require('@nexus/schema')

const Callback = objectType({
    name: 'Callback',
    definition(t) {
        t.model.id()
        t.model.conversation()
        t.model.nextInterviewOutlook()
        t.model.redFlags()
        t.model.callbackDate()
        t.model.submission()
        t.model.recordings()
        t.model.interviewers()
        t.model.spiels()
    },
})

const Interview = objectType({
    name: 'Interview',
    definition(t) {
        t.model.id()
        t.model.additionalInfo()
        t.model.complexityDescription()
        t.model.complexityLevel()
        t.model.interviewDate()
        t.model.interviewPrep()
        t.model.jobReqExceptions()
        t.model.nextSteps()
        t.model.overallInterviewSuccess()
        t.model.rNdItems()
        t.model.responsibilities()
        t.model.role()
        t.model.submission()
        t.model.spiels()
        t.model.recordings()
        t.model.interviewers()
        t.model.unsupportedTech()
    },
})

const Interviewer = objectType({
    name: 'Interviewer',
    definition(t) {
        t.model.id()
        t.model.archived()
        t.model.bu()
        t.model.name()
        t.model.callback()
        t.model.submissions()
        t.model.interviews()
    },
})

const Recording = objectType({
    name: 'Recording',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.encoding()
        t.model.filename()
        t.model.mimetype()
        t.model.updateAt()
        t.model.url()
        t.model.callback()
        t.model.interview()
    },
})

const Spiel = objectType({
    name: 'Spiel',
    definition(t) {
        t.model.id()
        t.model.archived()
        t.model.bu()
        t.model.name()
        t.model.interviews()
        t.model.callbacks()
    },
})

const Submission = objectType({
    name: 'Submission',
    definition(t) {
        t.model.id()
        t.model.archived()
        t.model.assignedToEngineer()
        t.model.crmEngineerCrmId()
        t.model.submissionDate()
        t.model.endClient()
        t.model.engineerName()
        t.model.bu()
        t.model.passThroughClient()
        t.model.callbacks()
        t.model.interviews()
        t.model.interviewers()
        t.model.techList()
    },
})

const Tech = objectType({
    name: 'Tech',
    definition(t) {
        t.model.id()
        t.model.archived()
        t.model.bu()
        t.model.name()
        t.model.interviews()
        t.model.submissions()
    },
})

const Query = queryType({
    definition(t) {
        // callbacks
        t.crud.callback()
        t.crud.callbacks()
        // interviews
        t.crud.interview()
        t.crud.interviews()
        // interviewers
        t.crud.interviewer()
        t.crud.interviewers({filtering: true})
        // spiels
        t.crud.spiel()
        t.crud.spiels()
        // submissions
        t.crud.submission()
        t.crud.submissions({filtering: true, ordering: true, pagination: true})
        // tech
        t.crud.tech()
        t.crud.teches({filtering: true})
    },
})

const Mutation = mutationType({
    definition(t) {
        // callbacks
        t.crud.createOneCallback()
        t.crud.updateOneCallback()
        t.crud.deleteOneCallback()
        // interviews
        t.crud.createOneInterview()
        t.crud.updateOneInterview()
        t.crud.deleteOneInterview()
        // interviewers
        t.crud.createOneInterviewer()
        t.crud.updateOneInterviewer()
        t.crud.deleteOneInterviewer()
        // spiels
        t.crud.createOneSpiel()
        t.crud.updateOneSpiel()
        t.crud.deleteOneSpiel()
        // submissions
        t.crud.createOneSubmission()
        t.crud.updateOneSubmission()
        t.crud.deleteOneSubmission()
        // tech
        t.crud.createOneTech()
        t.crud.updateOneTech()
        t.crud.deleteOneTech()
    },
})

let schema = makeSchema({
    types: [Query, Mutation, Callback, Interview, Interviewer, Recording, Spiel, Submission, Tech],
    plugins: [nexusSchemaPrisma({
        experimentalCRUD: true,
        shouldGenerateArtifacts: false
    }),],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '.prisma/client',
                alias: 'prisma',
            },
            {
                source: require.resolve('./context.js'),
                alias: 'Context',
            },
        ],
    },
})

module.exports = {
    schema
}