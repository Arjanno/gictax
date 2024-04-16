import { Event } from '@ebd-connect/cqrs-framework';

export class TaxAssessmentReviewedByEnterpriseTeam implements Event {
  constructor(
    public readonly taxAssessmentId : string,
  ) {}
}
