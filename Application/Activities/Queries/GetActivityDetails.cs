using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries
{
    public class GetActivityDetails
    {
        public class Query : IRequest<Activity>
        {
            public required string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly ApplicationDbContext context;

            public Handler(ApplicationDbContext context)
            {
                this.context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync([request.Id], cancellationToken)
                    ?? throw new Exception("Activity not found");
                return activity;
            }
        }
    }
}
