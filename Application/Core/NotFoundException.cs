namespace Application.Core;

/// <summary>
/// Thrown when a requested entity does not exist. Translated to HTTP 404 by the API layer.
/// </summary>
public class NotFoundException(string entityName, object key)
    : Exception($"{entityName} with id '{key}' was not found.");
