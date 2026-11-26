using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<List<Activity>> { }

    public class Handler(ApplicationDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            // Read-only query: skip change tracking and return in chronological order.
            return await context.Activities
                .AsNoTracking()
                .OrderBy(a => a.Date)
                .ToListAsync(cancellationToken);
        }
    }
}
