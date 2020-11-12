#!/bin/sh
cypress run --spec 'cypress/integration/googlesearch/**/*' 
#--parallel \
#--record \
#--group UI \
#--key $CYPRESS_RECORD_KEY \

# RECORD:       tells cypress to record the test run

# KEY:          determines what Cypress dashboard the test results are uploaded too

# PARALLEL:     tells Cypress that there is multiple machines running for this test execution