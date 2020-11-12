cypress run --env FRONTEND_URL=https://www.google.co.nz,BACKEND_URL=https://www.google.co.nz --spec "cypress/integration/googlesearch/**/*" 
#--parallel \
#--record \
#--group UI \
#--key $CYPRESS_RECORD_KEY \
# RECORD:       tells cypress to record the test run
# KEY:          determines what Cypress dashboard the test results are uploaded too
# PARALLEL:     tells Cypress that there is multiple machines running for this test execution